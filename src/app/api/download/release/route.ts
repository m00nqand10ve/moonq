import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(request: NextRequest) {
  try {
    // 发布版文件路径（在public/downloads文件夹中）
    const filePath = path.join(process.cwd(), 'public', 'downloads', '发布版.7z');
    
    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      // 如果文件不存在，返回一个模拟的响应
      return NextResponse.json(
        { 
          error: '文件暂时不可用', 
          message: '请将发布版.7z文件放置在public/downloads文件夹中' 
        },
        { status: 404 }
      );
    }

    // 读取文件
    const fileBuffer = fs.readFileSync(filePath);
    const fileName = '发布版.7z';

    // 设置响应头
    const headers = new Headers();
    headers.set('Content-Type', 'application/x-7z-compressed');
    headers.set('Content-Disposition', `attachment; filename="${encodeURIComponent(fileName)}"`);
    headers.set('Content-Length', fileBuffer.length.toString());

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('下载错误:', error);
    return NextResponse.json(
      { error: '下载失败' },
      { status: 500 }
    );
  }
}

// 处理OPTIONS请求（CORS预检）
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}